import routes, { navSections } from '@/router/admin'

/** Navigation grouped into its sections, shared by both navigation layouts. */
export const useNavSections = () =>
  navSections
    .map((title) => ({
      title,
      routes: routes.filter(
        (item) => item.meta?.section === title && !item.meta?.hidden
      )
    }))
    .filter((section) => section.routes.length)
