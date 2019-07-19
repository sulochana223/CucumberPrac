Feature: task
  @tag1
  Scenario Outline: To test login functinality of adactin hotel
    Given The user is in Adactin page
    When User enter and the user clicks the login button "<Username>", "<pswd>" 
Then Message displayed Login Successfully  
  Examples:
   |Username		 |pswd|
   |GreensTech123|Greens@123|
   |rubysherly|Ruby@1993|

 