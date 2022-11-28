import { css } from '@emotion/css';
import Head from 'next/head';
import { useTheme } from '@emotion/react';
import { Layout } from '../../containers';
import { Typography } from '../../components';

const About = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Head>
        <title>ممد: درباره ما</title>
      </Head>
      <Typography variant="h1" css="text-align: center;">
        درباره ما
      </Typography>
      <div
        className={css`
          padding: 20px;
          margin: 0 20px;
          background: ${theme.colors.primary};
          border-radius: 16px;
          margin-bottom: 13vw;
        `}
      >
        <Typography
          variant="h6"
          css="padding: 0 20px;
          color: #fafafa;
          line-height: 28px;
          padding: 8px;"
        >
          یه مجموعه ی آنلاین معرفی، آموزش و فروش بازی های فکریه. توی این مجموعه
          کنار هم جمع شدیم تا بتونیم تمام نیازهای سرگرمی و آموزش رو برای بچه ها
          از کودکی تا نوجوونی فراهم کنیم.
        </Typography>
        <Typography
          variant="h6"
          css="padding: 0 20px;
        color: #fafafa;
        line-height: 28px;
        padding: 8px;"
        >
          مگه سرگرمی یه نیازه؟ بله که نیازه. ما خانواده ی بانک بازی فکر می کنیم
          که هیچ چیز بیشتر از بازی و سرگرمی نمیتونه بچه ها رو خوشحال کنه و باعث
          ایجاد روابط بهتر و دوستانه تر توی کانون خانواده بشه. از طرفی هم
          مطمئنیم که بهترین راه برای آموزش دادن مفاهیم مختلف به بچه ها بازی
          کردنه. پس یه خانواده دوتا نیاز اساسی داره. یکی شناختن و فراهم کردن
          بازی هایی برای آموزش دادن مفاهیم پایه به بچه ها و دومی داشتن سرگرمی
          های مشترک خانوادگی که بتونه خوشحالی بیشتر و روابط بهتر ایجاد کنه و ما
          اینجا هستیم در کنار شما تا به این دو نیاز پاسخ بدیم.
        </Typography>
        <Typography
          variant="h6"
          css="padding: 0 20px;
      color: #fafafa;
      line-height: 28px;
      padding: 8px;"
        >
          توی این مسیر فراز و نشیب های زیادی رو پشت سر گذاشتیم. نه سال پیش
          کارمون رو از یه فروشگاه کوچولو شروع کردیم و سعی کردیم مردم دوروبرمون
          رو با دنیای شگفت انگیز بازی ها آشنا کنیم. اون موقع بیشترین دغدغه مون
          معرفی بازی هایی متناسب با توانایی بچه ها بود چون اکثر فروشنده های بازی
          تسلط کافی به بازی ها نداشتن و به خوبی نمیتونستن والدین رو راهنمایی
          کنن. ما تلاش کردیم بازی هایی با کیفیت و متناسب با سن و توانایی های بچه
          ها بهشون معرفی کنیم.
        </Typography>
        <Typography
          variant="h6"
          css="padding: 0 20px;
      color: #fafafa;
      line-height: 28px;
      padding: 8px;"
        >
          شکر خدا توی کارمون موفق بودیم اما از یه جایی به بعد فهمیدیم دلمون کار
          بزرگتری می خواد. دلمون میخواد که همه ی والدین با بازی و سرگرمی آشنا
          باشن و بتونن بدون دغدغه به بچه هاشون لذت یادگرفتن رو هدیه بدن و از
          کنار هم بازی کردن لذت ببرن. این شد که تصمیم گرفتیم یه وبسایت داشته
          باشیم تا اونجا تجربه هامون، دغدغه هامون و اطلاعاتمون رو با همه ی
          خانواده ها به اشتراک بگذاریم.
        </Typography>
        <Typography
          variant="h6"
          css="padding: 0 20px;
      color: #fafafa;
      line-height: 28px;
      padding: 8px;"
        >
          حالا ما اینجاییم کنار شما. تا با کمک هم بتونیم توی این مسیر رشد کنیم.
          بهترین راه های تعامل با همدیگه رو یادبگیریم و به بازی از یه جنبه ی
          دیگه نگاه کنیم. دلمون میخواد از بازی ها پلی بسازیم برای داشتن یه
          ارتباط خوب با بچه هامون.
        </Typography>
        <Typography
          variant="h6"
          css="padding: 0 20px;
      color: #fafafa;
      line-height: 28px;
      padding: 8px;"
        >
          اینجا سعی می کنیم با دقت و وسواس بهترین بازی های مناسب برای آموزش بچه
          ها و تفریح و سرگرمی در کنار بادگیری رو بهتون معرفی کنیم و آموزش بدیم
          تا با داشتن اطلاعات کامل برید سراغشون.
        </Typography>
      </div>
    </Layout>
  );
};

export default About;
