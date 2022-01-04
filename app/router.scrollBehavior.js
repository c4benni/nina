// import { sleep } from "~/components/utils";

export default function (to, from, saved) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }

  if (to.path == from.path) {
    return {}
  }

  const hasSaved = typeof saved == 'object'
  const top = hasSaved ? saved?.y || 0 : 0
  const left = hasSaved ? saved?.x || 0 : 0

  const value = { x: left, y: top }

  if (!hasSaved) {
    this.app.$scrollWindow(false)
  }

  // if (hasSaved) {
  //   this.app.$commit('UPDATE_', {
  //     path: 'noPageAnimation',
  //     value: true
  //   })
  // }

  this.app.$commit('UPDATE_', {
    name: 'scrollPosition',
    value
  })

  // await sleep.call({ $nextTick: (c) => c() }, 250);

  return { ...value }
}
