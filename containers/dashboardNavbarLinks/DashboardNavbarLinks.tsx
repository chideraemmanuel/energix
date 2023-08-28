'use client';

import DashboardNavbarLink from '@/components/dashboardNavbarLink/DashboardNavbarLink';
import styles from './DashboardNavbarLinks.module.scss';
import DashboardNavbarDropdown from '@/components/dashboardNavbarDropdown/DashboardNavbarDropdown';
import { dashboardLinks } from '@/constants';
import { FiActivity, FiChevronDown, FiFileMinus } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreTypes } from '@/redux/store';
import {
  closeAllDropdowns,
  closeFundingDropdown,
  closePartnershipDropdown,
  closeWithdrawalDropdown,
  openFundingDropdown,
  openPartnershipDropdown,
  openWithdrawalDropdown,
} from '@/redux/slices/navigationMenuSlice';
import { usePathname } from 'next/navigation';

const DashboardNavbarLinks: React.FC = () => {
  const pathname = usePathname();

  const { funding, partnership, withdrawal } = useSelector(
    (store: StoreTypes) => store.navigationMenu.dashboardNavigationDropdowns
  );

  const dispatch = useDispatch();

  const handleFundingDropdown = () => {
    dispatch(closeAllDropdowns());

    if (funding === 'active') {
      dispatch(closeFundingDropdown());
    } else {
      dispatch(openFundingDropdown());
    }
  };

  const handleWithdrawalDropdown = () => {
    dispatch(closeAllDropdowns());

    if (withdrawal === 'active') {
      dispatch(closeWithdrawalDropdown());
    } else {
      dispatch(openWithdrawalDropdown());
    }
  };

  const handlePartnershipDropdown = () => {
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
            ? { color: '#34bb8b', backgroundColor: 'rgba(52, 187, 139, 0.2)' }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Overview</span>
      </Link>

      <div className={styles.dropdown}>
        <button
          className={styles.dropdown__trigger}
          onClick={handleFundingDropdown}
        >
          <div>
            <FiFileMinus />
            <span>Funding</span>
          </div>

          <FiChevronDown />
        </button>

        {funding === 'active' && (
          <ul className={styles.dropdown__list}>
            <li>
              <Link
                href={'/dashboard/deposit'}
                style={
                  pathname === '/dashboard/deposit'
                    ? {
                        color: '#34bb8b',
                        backgroundColor: 'rgba(52, 187, 139, 0.2)',
                      }
                    : undefined
                }
              >
                Deposit
              </Link>
            </li>
            <li>
              <Link
                href={'/dashboard/deposit-history'}
                style={
                  pathname === '/dashboard/deposit-history'
                    ? {
                        color: '#34bb8b',
                        backgroundColor: 'rgba(52, 187, 139, 0.2)',
                      }
                    : undefined
                }
              >
                Deposit History
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className={styles.dropdown}>
        <button
          className={styles.dropdown__trigger}
          onClick={handleWithdrawalDropdown}
        >
          <div>
            <FiFileMinus />
            <span>Withdrawal</span>
          </div>

          <FiChevronDown />
        </button>

        {withdrawal === 'active' && (
          <ul className={styles.dropdown__list}>
            <li>
              <Link
                href={'/dashboard/withdraw'}
                style={
                  pathname === '/dashboard/withdraw'
                    ? {
                        color: '#34bb8b',
                        backgroundColor: 'rgba(52, 187, 139, 0.2)',
                      }
                    : undefined
                }
              >
                Withdraw
              </Link>
            </li>
            <li>
              <Link
                href={'/dashboard/withdrawal-history'}
                style={
                  pathname === '/dashboard/withdrawal-history'
                    ? {
                        color: '#34bb8b',
                        backgroundColor: 'rgba(52, 187, 139, 0.2)',
                      }
                    : undefined
                }
              >
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
          pathname === '/dashboard/cart'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Cart</span>
      </Link>

      <Link
        href={'/dashboard/account-statement'}
        className={styles.link}
        style={
          pathname === '/dashboard/account-statement'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Account Statement</span>
      </Link>

      <Link
        href={'/dashboard/portfolios'}
        className={styles.link}
        style={
          pathname === '/dashboard/portfolios'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Portfolios</span>
      </Link>

      <Link
        href={'/dashboard/retirement'}
        className={styles.link}
        style={
          pathname === '/dashboard/retirement'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Retirement</span>
      </Link>

      <div className={styles.dropdown}>
        <button
          className={styles.dropdown__trigger}
          onClick={handlePartnershipDropdown}
        >
          <div>
            <FiFileMinus />
            <span>Partnership</span>
          </div>

          <FiChevronDown />
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
          pathname === '/dashboard/membership'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Membership</span>
      </Link>

      <Link
        href={'/dashboard/referral'}
        className={styles.link}
        style={
          pathname === '/dashboard/referral'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Referral</span>
      </Link>

      <Link
        href={'/dashboard/achievements'}
        className={styles.link}
        style={
          pathname === '/dashboard/achievements'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Achievements</span>
      </Link>

      <Link
        href={'/dashboard/notifications'}
        className={styles.link}
        style={
          pathname === '/dashboard/notifications'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Notifications</span>
      </Link>

      <Link
        href={'/dashboard/support'}
        className={styles.link}
        style={
          pathname === '/dashboard/support'
            ? {
                color: '#34bb8b',
                backgroundColor: 'rgba(52, 187, 139, 0.2)',
              }
            : undefined
        }
      >
        <FiFileMinus />
        <span>Support</span>
      </Link>
    </div>
  );
};

export default DashboardNavbarLinks;
