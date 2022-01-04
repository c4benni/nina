<script>
import {
  computedBR,
  loadingPage,
  mountComplexPage,
} from '~/components/utils/main'
export default {
  name: 'IndexPage',
  data: () => ({
    selfName: 'IndexPage',
  }),
  head() {
    return {
      title: 'Explore',
    }
  },
  computed: {
    ...mountComplexPage.computed,
    ...computedBR,
    renderedComponents() {
      const value = [
        'NewRecipes',
        'CategoriesSection',
        'AreaSection',
        'Collections',
        'Trending',
        'Saved',
      ]
      if (/xxs|xs|sm/.test(this.breakpoints.is)) {
        value.push('MobileAppTitle')
      }

      return value
    },
  },
  watch: {
    ...mountComplexPage.watch,
  },

  beforeCreate() {
    this.$commit('UPDATE_', {
      path: 'text',
      value: 'Explore',
      innerPath: 'header',
    })
  },

  mounted() {
    mountComplexPage.mounted.call(this)
  },

  methods: {
    ...mountComplexPage.methods,
  },

  render(h) {
    const scoping = { 'data-p-ix': '' }
    const div = (d, c) => h('div', d, c)
    const mobileAppTitle = (d) => h('mobileAppTitle', d)
    const newRecipes = (d) => h('newRecipes', d)
    const areaSection = (d) => h('areaSection', d)
    const categoriesSection = (d) => h('categoriesSection', d)
    const collections = (d) => h('collections', d)
    const trending = (d) => h('trending', d)
    const saved = (d) => h('saved', d)

    return div(
      {
        attrs: { ...scoping, 'aria-label': 'explore page' },
        staticClass: 'root',
      },
      [
        mobileAppTitle(),
        newRecipes(),
        trending(),
        areaSection(),
        categoriesSection(),
        collections(),
        saved(),

        loadingPage.call(this, h),
      ]
    )
  },
}
</script>

<style>
.root[data-p-ix] {
  position: relative;
}
</style>
