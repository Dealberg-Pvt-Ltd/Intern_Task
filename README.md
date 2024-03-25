Test Project Summary : 
1. Using JavaScript (prefer TypeScript)
2. Can’t send OTP because it is prompting to enter before sending OTP to email 3. Hover around products not showing cursor pointer
4. Instead of add button it should be view button
5. When Reloading the Logout button disappears
6. No validation for email (Its accepting numbers also)
7.  Responsive Screen not aligned properly
8. Assigning empty strings for product lead to null page when reloading use params to search id from the all products list
9. Email and OTP is not stored in cache thats why (Problem No 5) occurs


Fixes:
1.Stored Email and OTP in cache local storage so that datas will be available even after reloading
2.Stored Products in local storage for faster loading and reloading issue fixed
