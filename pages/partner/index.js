import React, { useEffect } from 'react';
import { get } from 'utils/request';
import { useSelector, useDispatch } from 'react-redux';
import { userStateHandle } from '../../redux/actions/userActions';
import { setLoading } from '../../redux/actions/layoutActions';
import ActivityContent from 'components/partner/ActivityContent';

// Partner Content

const index = ({ user }) => {
  const partnerIndexMenu = useSelector(
    (state) => state.navigation.partnerMenuIndex
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userStateHandle(user));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [800]);
  }, []);

  const partnerMenuIndexContent = () => {
    switch (partnerIndexMenu) {
      case 0:
        return <ActivityContent />;
      default:
        return <div>Coming Soon</div>;
    }
  };

  return <div style={{ minWidth: 900 }}>{partnerMenuIndexContent()}</div>;
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;

  try {
    const user = await get('/api/partners/getpartnerbyjwt', ctx);

    return { props: { user: user } };
  } catch (error) {
    console.error(error);
    res.writeHead(302, { Location: '/partner/signin' });
    res.end();
    return { props: {} };
  }
};

export default index;
