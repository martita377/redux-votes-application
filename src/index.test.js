const mocks = require('../mocks')
const comments = require('./index').comments
const expect = require('chai').expect

context('comments', () => {
  it('returns default state', () => {
    expect(comments(undefined, {})).to.deep.equal([])
  })

  context(`THUMB_UP_COMMENT`, () => {
    const id = 'bd4587e3-4f69-4b20-8bfd-b0b15dfc449c'
    let state

    beforeEach(() => {
      state = [{
        votes: 0,
        id
      }]
    })

    it('updates `votes` with value `+1`', () => {
      const newState = comments(state, {
        type: 'THUMB_UP_COMMENT',
        id
      })
      expect(newState.find(note => note.id === id)).to.have.property('votes').to.equal(1)
    })
  })

  context(`THUMB_DOWN_COMMENT`, () => {
    const id = '416ac246-e7ac-49ff-93b4-f7e94d997e6b'
    let state

    beforeEach(() => {
      state = [{
        votes: 0,
        id
      }]
    })

    it('updates `votes` with value `-1`', () => {
      const newState = comments(state, {
        type: 'THUMB_DOWN_COMMENT',
        id
      })
      expect(newState.find(note => note.id === id)).to.have.property('votes').to.equal(-1)
    })
  })

})