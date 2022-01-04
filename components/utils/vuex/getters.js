import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://itwmctclrhnoeqnsakvq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDY3MDY4OSwiZXhwIjoxOTUwMjQ2Njg5fQ.q54IGtIcPovjtDAIAcfj70f_jel93V4_47gm-A0s4D0'
)

export default {
  pageEntered(s) {
    return /afterEnter/i.test(s.pageTransitionState)
  },
  supabase() {
    return supabase
  },
  headerHeight(s) {
    const breakpoints = s.breakpoints

    const xxs = breakpoints.is == 'xxs'

    const md = /md/.test(breakpoints.is)

    const lg = /lg/.test(breakpoints.is)
    const xl = /xl/.test(breakpoints.is)

    if (xxs) {
      return '40px'
    }

    if (md) {
      return '50px'
    }

    if (lg) {
      return '54px'
    }

    if (xl) {
      return '62px'
    }

    return '44px'
  }
}
