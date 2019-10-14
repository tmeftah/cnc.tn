export const state = () => ({
  slide: 0,
  sliding: null
})

export const mutations = {
  onSlideStart (state, slide) {
    state.sliding = true
  },
  onSlideEnd (state, slide) {
    state.sliding = false
  }
}

export const getters = {
  slide: (state) => { return state.slide }
}
