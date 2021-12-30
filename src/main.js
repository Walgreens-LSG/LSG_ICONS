import React from 'react';


//list of all svg components to import//

//Avatar Icons
import {WagIconAvatar} from './component/Avatar.js';
import {WagIconAvatarAlt} from './component/AvatarAlt.js';
import {WagIconCommunity} from './component/Community.js';
import {WagIconFamily} from './component/Family.js';
import {WagIconNurse} from './component/Nurse.js';
import {WagIconPharmacist} from './component/Pharmacist.js';
import {WagIconSignIn} from './component/Sign-In.js';
//Chat Icons
import {WagIconChat} from './component/Chat.js';
import {WagIconChatAlt} from './component/ChatAlt.js';
import {WagIconChatRx} from './component/ChatRx.js';
//Date & Time Icons
import {WagIconCalendar} from './component/Calendar.js';
import {WagIconCalendar7DaysAWeek} from './component/Calendar7DaysAWeek.js';
import {WagIconCalendar12Month} from './component/Calendar12Month.js';
import {WagIconCalendar18Month} from './component/Calendar18Month.js';
import {WagIconClock} from './component/Clock.js';
import {WagIconClock24Hours} from './component/Clock24Hours.js';
import {WagIconClockAutoReorder} from './component/ClockAutoReorder.js';
import {WagIconClockSameDayPickup} from './component/ClockSameDayPickup.js';
//Delivery Icons
import {WagIconInStore} from './component/In-Store.js';
import {WagIconPickup} from './component/Pickup.js';
import {WagIconReorder} from './component/Reorder.js';
import {WagIconSameDayDelivery} from './component/SameDayDelivery.js';
import {WagIconShipToHome} from './component/ShipToHome.js';
import {WagIconShoppingBagWithClock} from './component/ShoppingWithClock.js';
import {WagIconShipping} from './component/Shipping.js';
//Device Icons
import {WagIconCamera} from './component/Camera.js';
import {WagIconDesktop} from './component/Desktop.js';
import {WagIconKiosk} from './component/Kiosk.js';
import {WagIconPhone} from './component/Phone.js';
import {WagIconTablet} from './component/Tablet.js';
import {WagIconUSB} from './component/USB.js';
import {WagIconWearables} from './component/Wearables.js';
//Document Icons
import {WagIconClipboard} from './component/Clipboard.js';
import {WagIconContent} from './component/Content.js';
import {WagIconFolder} from './component/Folder.js';
import {WagIconPrint} from './component/Print.js';
import {WagIconRecordAdd} from './component/Record_Add.js';
import {WagIconRecordDownload} from './component/Record_Download.js';
import {WagIconScan} from './component/Scan.js';
import {WagIconWeeklyAd} from './component/WeeklyAd.js';
//Shopping Icons
import {WagIconCreditCard} from './component/CreditCard.js';
import {WagIconInsuranceCard} from './component/InsuranceCard.js';
import {WagIconWalgreensCard} from './component/myWalgreensCard.js';
import {WagIconCart} from './component/Cart.js';
import {WagIconCartAdd} from './component/Cart_Add.js';
import {WagIconCartCheck} from './component/Cart_Check.js';
import {WagIconClipCoupon} from './component/Coupon_Clip.js';
import {WagIconSavingsCoupon} from './component/Coupon_Savings.js';
import {WagIconShop} from './component/Shop.js';
//Social Icons
import {WagIconFacebook} from './component/Facebook.js';
import {WagIconInstagram} from './component/Instagram.js';
import {WagIconPinterest} from './component/Pinterest.js';
import {WagIconTwitter} from './component/Twitter.js';
import {WagIconYouTube} from './component/YouTube.js';
//Activity Icons
import {WagIconCycling} from './component/Cycling.js';
import {WagIconRunning} from './component/Running.js';
import {WagIconStanding} from './component/Standing.js';
import {WagIconStretching} from './component/Stretching.js';
import {WagIconWalking} from './component/Walking.js';
import {WagIconWheelchair} from './component/Wheelchair.js';
//Health icons
import {WagIconApple} from './component/Apple.js';
import {WagIconBlood} from './component/Blood.js';
import {WagIconBloodGlucose} from './component/BloodGlucose.js';
import {WagIconCaduceus} from './component/Caduceus.js';
import {WagIconFluShot} from './component/FluShot.js';
import {WagIconFluShotCalendar} from './component/FluShotCalendar.js';
import {WagIconGiveAShot} from './component/GiveAShot.js';
import {WagIconHealthDashboard} from './component/HealthDashboard.js';
import {WagIconHeart} from './component/Heart.js';
import {WagIconHeartAlt} from './component/HeartAlt.js';
import {WagIconHeartBloodPressure} from './component/HeartBloodPressure.js';
import {WagIconHeartHealthInfo} from './component/HeartHealthInfo.js';
import {WagIconMonitoring} from './component/Monitoring.js';
import {WagIconPulse} from './component/Pulse.js';
import {WagIconQuitSmoking} from './component/QuitSmoking.js';
import {WagIconSleepHistory} from './component/SleepHistory.js';
import {WagIconWeight} from './component/Weight.js';
//Rx Icons
import {WagIconDrugInfo} from './component/DrugInfo.js';
import {WagIconOTC} from './component/OTC.js';
import {WagIconPillBottle} from './component/PillBottle.js';
import {WagIconPillBottleAdd} from './component/PillBottle_Add.js';
import {WagIconPillBottleRefill} from './component/PillBottle_AutoRefill.js';
import {WagIconPillBottleExpress} from './component/PillBottle_ExpressRx.js';
import {WagIconPillBottleReady} from './component/PillBottle_Ready.js';
import {WagIconPillBottleRefillRx} from './component/PillBottle_RefillRx.js';
import {WagIconPillBottleReminder} from './component/PillBottle_Reminder.js';
import {WagIconPillBottleSideEffects} from './component/PillBottle_SideEffects.js';
import {WagIconPillBottleTransferRx} from './component/PillBottle_TransferRx.js';
import {WagIconRxHealth} from './component/Rx_Health.js';
import {WagIconRxMobile} from './component/Rx_Mobile.js';
import {WagIconRxPad} from './component/Rx_Pad.js';
//Services Icons
import {WagIconContactLenses} from './component/ContactLenses.js';
import {WagIconDental} from './component/Dental.js';
import {WagIconHearing} from './component/Hearing.js';
import {WagIconOptical} from './component/Optical.js';
import {WagIconInhaler} from './component/Inhaler.js'; 
//Actions Icons
import {WagIconCirclePlus} from './component/Circle_Plus.js';
import {WagIconCircleDismiss} from './component/Circle_Dismiss.js';
import {WagIconCircleMinus} from './component/Circle_Minus.js';
import {WagIconAdd} from './component/Line_Plus.js';
import {WagIconDismiss} from './component/Line_Dismiss.js';
import {WagIconMinus} from './component/Line_Minus.js';
import {WagIconEdit} from './component/Edit.js';
import {WagIconEditAlt} from './component/EditAlt.js';
import {WagIconFilter} from './component/Filter.js';
import {WagIconSearch} from './component/Search.js';
import {WagIconSettings} from './component/Settings.js';
import {WagIconShare} from './component/Share.js';
import {WagIconSort} from './component/Sort.js';
import {WagIconZoom} from './component/Zoom.js';
//Alerts Icons
import {WagIconAlert} from './component/Alert.js';
import {WagIconCheck} from './component/Check.js';
import {WagIconCheckAlt} from './component/CheckAlt.js';
import {WagIconInfo} from './component/Info.js';
import {WagIconPrice} from './component/Price.js';
import {WagIconQuestion} from './component/Question.js';
//Arrows Icons
import {WagIconArrowDown} from './component/Arrow_Down.js';
import {WagIconArrowLeft} from './component/Arrow_Left.js';
import {WagIconArrowRight} from './component/Arrow_Right.js';
import {WagIconArrowUp} from './component/Arrow_Up.js';
import {WagIconArrowLeftUp} from './component/Arrow_LeftUp.js';
import {WagIconDownload} from './component/Download.js';
import {WagIconMinimize} from './component/Minimize.js';
import {WagIconUpload} from './component/Upload.js';
//Gamification Icons
import {WagIconFavorite} from './component/Favorite.js';
import {WagIconGift} from './component/Gift.js';
import {WagIconStar} from './component/Star.js';
import {WagIconStarAlt} from './component/StarAlt.js';
import {WagIconTrophy} from './component/Trophy.js';
//Photo Icons
import {WagIconAlbums} from './component/Albums.js';
import {WagIconAutoEnhance} from './component/AutoEnhance.js';
import {WagIconBrightness} from './component/Brightness.js';
import {WagIconCrop} from './component/Crop.js';
import {WagIconImage} from './component/Image.js';
import {WagIconOrderPrints} from './component/OrderPrints.js';
import {WagIconOrderPrintsConfirm} from './component/OrderPrints_Confirm.js';
import {WagIconRedEye} from './component/RedEye.js';
import {WagIconResize} from './component/Resize.js';
import {WagIconRotate} from './component/Rotate.js';
//Misc Icons
import {WagIconEmail} from './component/Email.js';
import {WagIconGraph} from './component/Graph.js';
import {WagIconLink} from './component/Link.js';
import {WagIconList} from './component/List.js';
import {WagIconPin} from './component/Pin.js';
import {WagIconRestricted} from './component/Restricted.js';
import {WagIconTrash} from './component/Trash.js';

// Exports of all SVG Icon components
export {
  //Avatar Icons
  WagIconAvatar,
  WagIconAvatarAlt,
  WagIconCommunity,
  WagIconFamily,
  WagIconNurse,
  WagIconPharmacist,
  WagIconSignIn,
  //Chat Icons
  WagIconChat,
  WagIconChatAlt,
  WagIconChatRx,
  //Date & Time Icons
  WagIconCalendar,
  WagIconCalendar7DaysAWeek,
  WagIconCalendar12Month,
  WagIconCalendar18Month,
  WagIconClock,
  WagIconClock24Hours,
  WagIconClockAutoReorder,
  WagIconClockSameDayPickup,
  //Delivery Icons
  WagIconInStore,
  WagIconPickup,
  WagIconReorder,
  WagIconSameDayDelivery,
  WagIconShipToHome,
  WagIconShoppingBagWithClock,
  WagIconShipping,
  //Device Icons
  WagIconCamera,
  WagIconDesktop,
  WagIconKiosk,
  WagIconPhone,
  WagIconTablet,
  WagIconUSB,
  WagIconWearables,
  //Document Icons
  WagIconClipboard,
  WagIconContent,
  WagIconFolder,
  WagIconPrint,
  WagIconRecordAdd,
  WagIconRecordDownload,
  WagIconScan,
  WagIconWeeklyAd,
  //Shopping Icons
  WagIconCreditCard,
  WagIconInsuranceCard,
  WagIconWalgreensCard,
  WagIconCart,
  WagIconCartAdd,
  WagIconCartCheck,
  WagIconClipCoupon,
  WagIconSavingsCoupon,
  WagIconShop,
  //Social Icons
  WagIconFacebook,
  WagIconInstagram,
  WagIconPinterest,
  WagIconTwitter,
  WagIconYouTube,
  //Activity Icons
  WagIconCycling,
  WagIconRunning,
  WagIconStanding,
  WagIconStretching,
  WagIconWalking,
  WagIconWheelchair,
  //Health Icons
  WagIconApple,
  WagIconBlood,
  WagIconBloodGlucose,
  WagIconCaduceus,
  WagIconFluShot,
  WagIconFluShotCalendar,
  WagIconGiveAShot,
  WagIconHealthDashboard,
  WagIconHeart,
  WagIconHeartAlt,
  WagIconHeartBloodPressure,
  WagIconHeartHealthInfo,
  WagIconMonitoring,
  WagIconPulse,
  WagIconQuitSmoking,
  WagIconSleepHistory,
  WagIconWeight,
  //Rx Icons
  WagIconDrugInfo,
  WagIconOTC,
  WagIconPillBottle,
  WagIconPillBottleAdd,
  WagIconPillBottleRefill,
  WagIconPillBottleExpress,
  WagIconPillBottleReady,
  WagIconPillBottleRefillRx,
  WagIconPillBottleReminder,
  WagIconPillBottleSideEffects,
  WagIconPillBottleTransferRx,
  WagIconRxHealth,
  WagIconRxMobile,
  WagIconRxPad,
  //Services Icons
  WagIconContactLenses,
  WagIconDental,
  WagIconHearing,
  WagIconOptical,
  WagIconInhaler,
  //Actions Icons
  WagIconCirclePlus,
  WagIconCircleDismiss,
  WagIconCircleMinus,
  WagIconAdd,
  WagIconDismiss,
  WagIconMinus,
  WagIconEdit,
  WagIconEditAlt,
  WagIconFilter,
  WagIconSearch,
  WagIconSettings,
  WagIconShare,
  WagIconSort,
  WagIconZoom,
  //Alerts Icons
  WagIconAlert,
  WagIconCheck,
  WagIconCheckAlt,
  WagIconInfo,
  WagIconPrice,
  WagIconQuestion,
  //Arrows Icons
  WagIconArrowDown,
  WagIconArrowLeft,
  WagIconArrowRight,
  WagIconArrowUp,
  WagIconArrowLeftUp,
  WagIconDownload,
  WagIconMinimize,
  WagIconUpload,
  //Gamification Icons
  WagIconFavorite,
  WagIconGift,
  WagIconStar,
  WagIconStarAlt,
  WagIconTrophy,
  //Photo Icons
  WagIconAlbums,
  WagIconAutoEnhance,
  WagIconBrightness,
  WagIconCrop,
  WagIconImage,
  WagIconOrderPrints,
  WagIconOrderPrintsConfirm,
  WagIconRedEye,
  WagIconResize,
  WagIconRotate,
  //Misc Icons
  WagIconEmail,
  WagIconGraph,
  WagIconLink,
  WagIconList,
  WagIconPin,
  WagIconRestricted,
  WagIconTrash
};


