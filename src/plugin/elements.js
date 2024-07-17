import {
  Dialog,
  Upload,
  Tag,
  Pagination,
  Input,
  Cascader,
  Button,
  Form,
  Select,
  Switch,
  Option,
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  CollapseItem,
  Menu,
  Slider,
  MenuItem,
  Submenu,
  Radio,
  RadioGroup,
  Tooltip,
  FormItem,
  RadioButton
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Slider)
    Vue.use(Radio)
    Vue.use(Tag)
    Vue.use(Dialog)
    Vue.use(Cascader)
    Vue.use(Upload)
    Vue.use(Select)
    Vue.use(Switch)
    Vue.use(Tooltip)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Option)
    Vue.use(Menu)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(MenuItem)
    Vue.use(Submenu)
    Vue.use(Pagination)
    Vue.use(Input)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)
    Vue.use(Form)
    Vue.use(Button)
    Vue.use(FormItem)
  },
  other: {}
}
export default element
