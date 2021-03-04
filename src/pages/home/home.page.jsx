
import FirstAnimationComponent from '../../components/animations/first-animation.component'
import AnimationDropdownComponent from '../../components/dropdown/animation-dropdown/animation-dropdown.component'
import FirstFormComponent from '../../components/forms/first-form/first-form.component'
import FormValidationComponent from '../../components/forms/form-validation/form-validation.component'
import SecondFormComponent from '../../components/forms/second-form/second-form.component'
import ThirdFormComponent from '../../components/forms/third-form/third-form.component'
import HookFullComponent from '../../components/hook-full/hook-full.component'
import AccordionMenuComponent from '../../components/menu/accordion-menu/accordion-menu.component'
import SplitMenuComponent from '../../components/menu/split-menu/split-menu.component'
import ReactTableComponent from '../../components/react-table/react-table.component'
import PageScrollerComponent from '../../components/slider/page-scroller/page-scroller.component'
import './home.styles.scss'

const HomePage = () => {
    return (
        <div className="home-page">
            {/* list of menu  */}
            {/* <HorizontalMenuAnimation /> */}

            {/* vertical menu  */}
            {/* <VerticalMenuOne /> */}

            {/* full page menu  */}
            {/* <FullPageMenu /> */}

            {/* canvas menu  */}
            {/* <CanvasMenuComponent /> */}

            {/* pure slider */}
            {/* <PureSlider /> */}

            {/* animation dropdown  */}
            {/* <AnimationDropdownComponent /> */}

            {/* split menu  */}
            {/* <SplitMenuComponent /> */}


            {/* accordion menu  */}
            {/* <AccordionMenuComponent /> */}


            {/* animation project */}
            {/* <FirstAnimationComponent /> */}

            {/* page scroller  */}
            {/* <PageScrollerComponent /> */}


            {/* first form   */}
            {/* <FirstFormComponent /> */}

            {/* second forms   */}
            {/* <SecondFormComponent /> */}

            {/* third form  */}
            {/* <ThirdFormComponent /> */}


            {/* component use hooks  */}
            {/* <HookFullComponent /> */}

            {/* react table   */}
            {/* <ReactTableComponent /> */}

            {/* react form validation   */}
            <FormValidationComponent />
        </div>
    )
}

export default HomePage
