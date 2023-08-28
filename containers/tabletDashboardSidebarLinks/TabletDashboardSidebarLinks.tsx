'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './TabletDashboardSidebarLinks.module.scss';
import { StoreTypes } from '@/redux/store';
import {
  closeAllDropdowns,
  closeFundingDropdown,
  closePartnershipDropdown,
  closeWithdrawalDropdown,
  openDashboardSidebar,
  openFundingDropdown,
  openPartnershipDropdown,
  openWithdrawalDropdown,
} from '@/redux/slices/navigationMenuSlice';
import Link from 'next/link';
import { FiChevronDown, FiFileMinus } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const TabletDashboardSidebarLinks: React.FC = () => {
  const pathname = usePathname();

  const { funding, partnership, withdrawal } = useSelector(
    (store: StoreTypes) => store.navigationMenu.dashboardNavigationDropdowns
  );

  const { dashoardSidebarActive } = useSelector(
    (store: StoreTypes) => store.navigationMenu
  );

  const dispatch = useDispatch();

  const handleFundingDropdown = () => {
    dispatch(openDashboardSidebar());
    dispatch(closeAllDropdowns());

    if (funding === 'active') {
      dispatch(closeFundingDropdown());
    } else {
      dispatch(openFundingDropdown());
    }
  };

  const handleWithdrawalDropdown = () => {
    dispatch(openDashboardSidebar());
    dispatch(closeAllDropdowns());

    if (withdrawal === 'active') {
      dispatch(closeWithdrawalDropdown());
    } else {
      dispatch(openWithdrawalDropdown());
    }
  };

  const handlePartnershipDropdown = () => {
    dispatch(openDashboardSidebar());
    dispatch(closeAllDropdowns());

    if (partnership === 'active') {
      dispatch(closePartnershipDropdown());
    } else {
      dispatch(openPartnershipDropdown());
    }
  };

  return (
    <div className={styles.container}>
      <Link
        href={'/dashboard/overview'}
        className={styles.link}
        style={
          pathname === '/dashboard/overview'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : pathname === '/dashboard/overview' && dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
        // style={
        //   pathname === '/dashboard/notifications'
        //     ? {
        //         color: '#34bb8b',
        //         backgroundColor: 'rgba(52, 187, 139, 0.2)',
        //       }
        //     : undefined
        // }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Overview
        </span>
      </Link>

      <div className={styles.dropdown}>
        <button
          className={styles.dropdown__trigger}
          style={
            dashoardSidebarActive
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  justifyContent: 'space-between',
                }
              : undefined
          }
          onClick={handleFundingDropdown}
        >
          <div>
            <FiFileMinus />
            <span
              style={{
                display: dashoardSidebarActive ? 'inline-block' : 'none',
              }}
            >
              Funding
            </span>
          </div>

          {dashoardSidebarActive && <FiChevronDown />}
        </button>

        {funding === 'active' && (
          <ul className={styles.dropdown__list}>
            <li>
              <Link href={'/dashboard/deposit'}>Deposit</Link>
            </li>
            <li>
              <Link href={'/dashboard/deposit-history'}>Deposit History</Link>
            </li>
          </ul>
        )}
      </div>

      <div className={styles.dropdown}>
        <button
          className={styles.dropdown__trigger}
          style={
            dashoardSidebarActive
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  justifyContent: 'space-between',
                }
              : undefined
          }
          onClick={handleWithdrawalDropdown}
        >
          <div>
            <FiFileMinus />
            <span
              style={{
                display: dashoardSidebarActive ? 'inline-block' : 'none',
              }}
            >
              Withdrawal
            </span>
          </div>

          {dashoardSidebarActive && <FiChevronDown />}
        </button>

        {withdrawal === 'active' && (
          <ul className={styles.dropdown__list}>
            <li>
              <Link href={'/dashboard/withdraw'}>Withdraw</Link>
            </li>
            <li>
              <Link href={'/dashboard/withdrawal-history'}>
                Withdrawal History
              </Link>
            </li>
          </ul>
        )}
      </div>

      <Link
        href={'/dashboard/cart'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Cart
        </span>
      </Link>

      <Link
        href={'/dashboard/account-statement'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Account Statement
        </span>
      </Link>

      <Link
        href={'/dashboard/portfolios'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Portfolios
        </span>
      </Link>

      <Link
        href={'/dashboard/retirement'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Retirement
        </span>
      </Link>

      <div className={styles.dropdown}>
        <button
          className={styles.dropdown__trigger}
          style={
            dashoardSidebarActive
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  justifyContent: 'space-between',
                }
              : undefined
          }
          onClick={handlePartnershipDropdown}
        >
          <div>
            <FiFileMinus />
            <span
              style={{
                display: dashoardSidebarActive ? 'inline-block' : 'none',
              }}
            >
              Partnership
            </span>
          </div>

          {dashoardSidebarActive && <FiChevronDown />}
        </button>

        {partnership === 'active' && (
          <ul className={styles.dropdown__list}>
            <li>
              <Link href={'/dashboard/partnership/individual'}>Individual</Link>
            </li>
            <li>
              <Link href={'/dashboard/partnership/business'}>Business</Link>
            </li>
          </ul>
        )}
      </div>

      <Link
        href={'/dashboard/membership'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Membership
        </span>
      </Link>

      <Link
        href={'/dashboard/referral'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Referral
        </span>
      </Link>

      <Link
        href={'/dashboard/achievements'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Achievements
        </span>
      </Link>

      <Link
        href={'/dashboard/notifications'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Notifications
        </span>
      </Link>

      <Link
        href={'/dashboard/support'}
        className={styles.link}
        style={
          dashoardSidebarActive
            ? {
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span
          style={{ display: dashoardSidebarActive ? 'inline-block' : 'none' }}
        >
          Support
        </span>
      </Link>
    </div>
  );
};

export default TabletDashboardSidebarLinks;
