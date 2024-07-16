import { IconType } from 'react-icons';

import {
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniUser,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiArrowUpRight,
	HiMoon,
	HiSun,
} from "react-icons/hi2";

import {
	FaDiscord,
	FaGithub,
	FaLinkedinIn
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	person: HiMiniUser,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	arrowUpRight: HiArrowUpRight,
	moon: HiMoon,
	sun: HiSun,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedinIn
};