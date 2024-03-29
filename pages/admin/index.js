import React, { useEffect } from 'react';
import { get } from 'utils/request';
import { useSelector, useDispatch } from 'react-redux';
import { userStateHandle } from '../../redux/actions/userActions';
import { setLoading } from '../../redux/actions/layoutActions';

// Admin Content
import ActivityContent from 'components/admin/ActivityContent';
import AdsContent from 'components/admin/AdsContent';
import PartnerContent from 'components/admin/PartnerContent';
import ReportContent from 'components/admin/ReportContent';
import UserContent from 'components/admin/UserContent';

const index = ({ user }) => {
  const adminIndexMenu = useSelector(
    (state) => state.navigation.adminMenuIndex
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userStateHandle(user));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [800]);
  }, []);

  useEffect(() => {
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = `
    function preventBack() { window.history.forward(); }
    setTimeout("preventBack()", 0);
    window.onunload = function () { null };
    `;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  const adminMenuIndexContent = () => {
    switch (adminIndexMenu) {
      case 0:
        return <PartnerContent />;
      case 1:
        return <UserContent />;
      case 2:
        return <ActivityContent />;
      case 3:
        return <ReportContent />;
      case 4:
        return <AdsContent />;
      default:
        return <div>Content is Not Found</div>;
    }
  };

  return <div style={{ minWidth: 900 }}>{adminMenuIndexContent()}</div>;
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;

  try {
    const user = await get('/api/employees/getemployeebyjwt', ctx);
    return { props: { user: user } };
  } catch (error) {
    console.error(error);
    res.writeHead(302, { Location: '/admin/signin' });
    res.end();
    return { props: {} };
  }
};

export default index;
