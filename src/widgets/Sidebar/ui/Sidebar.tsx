import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import  {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";


interface SideBarProps {
	className?: string
}

export const Sidebar = ({className}: SideBarProps) => {

	const [collapsed, setCollapsed] =  useState<boolean>(false);
	const toggleCollapsed = () => {
		setCollapsed((prev) => !prev);
	}

    return (
        <div
			className={classNames (cls.sidebar, {[cls.collapsed]: collapsed}, [className || ''])}
		>
			<button onClick={toggleCollapsed}>toggle</button>
			<ThemeSwitcher/>
		</div>
  
 
    );
};
