export interface IMenuConfig {
  path: string
  name: string
  icon: string | undefined
  active: boolean | undefined
}

export interface INavbar {
  path: string
  name: string
  active: boolean | undefined
}

const MenuConfig = (
  username: string = 'USERNAME',
  imageProfile: string = '',
  selected: string | undefined,
  search: boolean = false,
  addMenuItems: IMenuConfig[] | null | undefined = [],
  addProfileItems: IMenuConfig[] | null | undefined = [],
  addNavbarItems: INavbar[] | null | undefined = [],
) => {
  let menuItems: IMenuConfig[] = [
    ...addMenuItems,
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'paw',
    },
  ]
  let navBarItems: INavbar[] = [...addNavbarItems]
  let profileItems: INavbar[] = [...addProfileItems]

  menuItems = menuItems.map((item: IMenuConfig) => {
    if (item.name == selected) {
      item.active = true
    }
    return item
  })
  profileItems = profileItems.map((item: IMenuConfig) => {
    if (item.name == selected) {
      item.active = true
    }
    return item
  })
  navBarItems = navBarItems.map((item: INavbar) => {
    if (item.name == selected) {
      item.active = true
    }
    return item
  })

  navBarItems = navBarItems.map((item: INavbar) => {
    if (item.name == selected) {
      item.active = true
    }
    return item
  })

  return {
    search,
    username,
    imageProfile,
    profileItems: profileItems,
    navBarItems: navBarItems,
    menuItems: menuItems,
  }
}

export default MenuConfig
