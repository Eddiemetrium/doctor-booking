import Tabs from './Tabs';
import Loader from '../loading';
import Error from '../error';

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {Loading && !error && <Loader />}
        {Error && !loading && <Error />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">{data.isApproved === "pending"}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;