context('Teacher-Sign-Up', function() {
  it.only('Signs up as a teacher',() => {
    cy.contains('Register').click()
      .get('div [class = "text-input first_name"]').find('input').type('stu-first1')
      .get('div [class = "text-input last_name"]').find('input').type('stu-last1')
      .get('div [class = "text-input password"]').find('input').type('password')
      .get('div [class = "text-input password_confirmation"]').find('input').type('password')

    cy.contains('Register!').click()
      .get('div[class = "radio-input"]').find('input[value = "teacher"]').click()
    cy.get('div[class = "text-input login"]').find('input').type('firstlast1')
    cy.get('div[class = "text-input email"]').find('input').type('firstlast1@email.com')
    cy.contains('Country').get('.Select').




})
})


//cy.get('div [class = "text-input user[login]"]').find('input').type('ksantos-cc')
//cy.get('div [class = "text-input user[password]"]').find('input').type('Qwerty7&')
//cy.get('button').contains('Log In!').click()
