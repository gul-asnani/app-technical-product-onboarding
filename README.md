# App Automate Technical Product Onboarding

## 1. Run Appium tests on local device
   Ran tests on Wikipedia app from app store (org.wikipedia package)
   
   `node test.js`
   
## 2. Run Appium tests on BStack
  Used github repository to run tests on sample Wikipedia app:
  
  https://github.com/browserstack/python-appium-app-browserstack
  
## 3. Run Espresso tests on local device
  Used Calculator.apk and CalculatorTest.apk to run tests on my local OnePlus 11R 5G using the following command:
  
  `./adb -s 4612d63f shell am instrument -w -r -e debug false com.sample.browserstack.samplecalculator.test/android.support.test.runner.AndroidJUnitRunner`
  
## 4. Run Espresso tests on BStack
After uploading Calculator.apk and CalculatorTest.apk using the following commands, I could run the Espresso tests on App Automate.
1. `curl -u "<user_name>:<key>" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/app" \
-F "file=@/Users/gulasnani/Downloads/Calculator.apk"`

2. `curl -u "<user_name>:<key>" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/test-suite" \
-F "file=@/Users/gulasnani/Downloads/CalculatorTest.apk"`

3. `curl -u "<user_name>:<key>" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/build" \
-d '{"app": "bs://dad984e29163c343288f07c33c6cef5a3cbe89b1", "testSuite": "bs://73ba894f93b0dfb621f247f28d8027686969f219", "devices": ["Samsung Galaxy S9-8.0"]}' \
-H "Content-Type: application/json"`

