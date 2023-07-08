import React, { useContext, FC } from "react";
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BsFillBellFill } from "react-icons/bs";
import { LanguageContext } from './LanguageContext';

// BtnSettingItems type
type BtnSettingItem = {
    label: string;
    icon: FC;
};


function BtnSetting() {
    const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

    const switchLanguage = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'TH' : 'EN');
    };
    return (

        <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={switchLanguage}
        >
            <img className={currentLanguage === 'TH' ? 'sepia-0' : 'sepia'} width={20} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/d6b61f6d-92fb-4830-0dfd-aa3ef41ed900/100'} />
            <img className={currentLanguage === 'EN' ? 'sepia-0' : 'sepia'} width={20} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/b284a787-d18d-42be-6c9d-bc01cfd5d300/100'} />
        </Button>

    );
}

export default BtnSetting;