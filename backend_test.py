import requests
import sys
from datetime import datetime

class LawFirmAPITester:
    def __init__(self, base_url="https://cinthya-advocacia.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        response_data = response.json()
                        print(f"Response: {response_data}")
                        return True, response_data
                    except:
                        print(f"Response: {response.text[:200]}")
                        return True, {}
                return True, {}
            else:
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200] if response.text else 'No response'
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}")
                return False, {}

        except Exception as e:
            self.failed_tests.append({
                'test': name,
                'error': str(e)
            })
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )

    def test_create_status_check(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )

    def test_get_status_checks(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

    def test_create_contact_message(self):
        """Test creating a contact message"""
        test_data = {
            "name": "João Silva",
            "phone": "(11) 99999-9999",
            "email": "joao.silva@email.com",
            "message": "Preciso de ajuda com uma questão trabalhista urgente."
        }
        return self.run_test(
            "Create Contact Message",
            "POST",
            "api/contact",
            200,
            data=test_data
        )

    def test_get_contact_messages(self):
        """Test getting contact messages"""
        return self.run_test(
            "Get Contact Messages",
            "GET",
            "api/contact",
            200
        )

    def test_invalid_contact_message(self):
        """Test creating contact message with invalid data"""
        test_data = {
            "name": "",  # Empty name
            "phone": "invalid-phone",
            "email": "invalid-email",  # Invalid email
            "message": ""  # Empty message
        }
        return self.run_test(
            "Invalid Contact Message",
            "POST",
            "api/contact",
            422  # Validation error expected
        )

def main():
    print("🚀 Starting Law Firm API Tests...")
    print("=" * 50)
    
    # Setup
    tester = LawFirmAPITester()

    # Run tests
    print("\n📋 Testing API Root...")
    tester.test_api_root()

    print("\n📋 Testing Status Check Endpoints...")
    tester.test_create_status_check()
    tester.test_get_status_checks()

    print("\n📋 Testing Contact Message Endpoints...")
    tester.test_create_contact_message()
    tester.test_get_contact_messages()

    print("\n📋 Testing Validation...")
    tester.test_invalid_contact_message()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 FINAL RESULTS")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.failed_tests:
        print(f"\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            print(f"  - {failure}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())