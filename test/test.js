const chai = require('chai')
const WinTime = require('./../index')

describe('windows-timestamp()', function() {

  it('should throw a TypeError when the argument is not a number', function() {
    chai.expect( () => { WinTime('not a number'   ) } ).to.throw(TypeError)
    chai.expect( () => { WinTime('not 245 number' ) } ).to.throw(TypeError)
    chai.expect( () => { WinTime('134t a num134'  ) } ).to.throw(TypeError)
  })

  it('should throw an Error when the number is too big', function() {
    chai.expect( () => { WinTime('92233720368547758071') } ).to.throw()
    chai.expect( () => { WinTime(92233720368547758071  ) } ).to.throw()
  })

  it('should return a Date when a valid windows timestamp is given', function() {
    chai.expect( WinTime('131461446367662144') ).to.be.an.instanceof(Date);
    chai.expect( WinTime(131461446367662144  ) ).to.be.an.instanceof(Date);
  })

})