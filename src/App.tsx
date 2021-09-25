import React from 'react';
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import './styles/index.scss'
import './App.css'

function App() {
    return (
        <>
            <div>
                <Button btnType={ButtonType.Primary} onClick={()=> {alert()}}> 注 册 </Button>
                <Button btnType={ButtonType.Default}> 登 录 </Button>
                <Button btnType={ButtonType.Default} disabled> 登 录(disabled) </Button>
                <Button btnType={ButtonType.Danger}> 删 除 </Button>
                <Button btnType={ButtonType.Danger} disabled> 删 除 </Button>
            </div>
            <div>
                <Button size={ButtonSize.Small} btnType={ButtonType.Primary}> 注 册 </Button>
                <Button size={ButtonSize.Small} btnType={ButtonType.Default}> 登 录 </Button>
                <Button size={ButtonSize.Small} btnType={ButtonType.Default} disabled> 登 录(disabled) </Button>
                <Button size={ButtonSize.Small} btnType={ButtonType.Danger}> 删 除 </Button>
                <Button size={ButtonSize.Small} btnType={ButtonType.Danger} disabled> 删 除 </Button>
            </div>
            <div>
                <Button size={ButtonSize.Large} btnType={ButtonType.Primary}> 注 册 </Button>
                <Button size={ButtonSize.Large} btnType={ButtonType.Default}> 登 录 </Button>
                <Button size={ButtonSize.Large} btnType={ButtonType.Default} disabled> 登 录(disabled) </Button>
                <Button size={ButtonSize.Large} btnType={ButtonType.Danger}> 删 除 </Button>
                <Button size={ButtonSize.Large} btnType={ButtonType.Danger} disabled> 删 除 </Button>
            </div>
        </>
    );
}

export default App;
