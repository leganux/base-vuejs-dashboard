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
  imageBrand: string = '',
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
      active: true,
    },
    {
      path: '/users',
      name: 'Usuarios',
      icon: 'users',
    },
  ]
  let navBarItems: INavbar[] = [
    ...addNavbarItems,
    {
      path: '/dashboard',
      name: 'Dashboard',
    },
    {
      path: '/',
      name: 'Sitio Web',
    },
  ]
  let profileItems: INavbar[] = [
    ...addProfileItems,
    {
      path: '/profile',
      name: 'Perfil',
      icon: 'user',
    },
  ]

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
    imageBrand,
    profileItems: profileItems,
    navBarItems: navBarItems,
    menuItems: menuItems,
  }
}

export default MenuConfig
