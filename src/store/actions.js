export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
  // addPet: (context, pet) => {
  //   context.commit('appendPet', pet)
  // }
}