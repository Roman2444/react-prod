import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SideBarProps {
    className?: string
}

export const Sidebar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className || ''])}
        >
            <button
                type="button"
                onClick={toggleCollapsed}
            >
                {t('Переключить')}
            </button>
            <ThemeSwitcher />
        </div>

    );
};
