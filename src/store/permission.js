const permission = {
  state: {
    headerMenu: [],
    sidebarMenus: {}
  },
  init(data) {
    const roles = data.roles;
    const router = data.router;
    const headerMenu = router.filter(v => {
      if (this.hasPermission(roles, v)) {
        if (v.children && v.children.length > 0) {
          v.children = v.children.filter(child => {
            if (this.hasPermission(roles, child)) {
              return child
            }
            return false;
          });
          return v
        } else {
          return v
        }
      }
      return false;
    });
    this.state.headerMenu = headerMenu;

    let $this = this;
    for (let v of router) {
      if(this.hasPermission(roles, v) && v.children && v.children.length > 0){
        $this.state.sidebarMenus[v.path] = v.children.filter(menu => {
          if(this.hasPermission(roles,menu)){
            if(menu.children && menu.children.length > 0){
              menu.children = menu.children.filter(child => {
                if (this.hasPermission(roles, child)) {
                  return true;
                }
                return false;
              });
            }
            return true;
          }
          return false;
        });
      }
    }

  },
  get(route) {
    if(route.path){
      let index = route.path.indexOf('/',1);
      return this.state.sidebarMenus[route.path.substring(0,index)];
    }
  },
  getHeaderMenu() {
    return this.state.headerMenu;
  },
  hasPermission(roles, route) {
    if(roles.indexOf('admin') >= 0) {
      return true;
    }
    if (route.meta && route.meta.role) {
      return roles.some(role => route.meta.role.indexOf(role) >= 0)
    } else {
      return true
    }
  }
};

export default permission;
