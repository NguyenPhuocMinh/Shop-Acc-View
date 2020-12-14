import React, { useEffect, useState } from 'react';
import {
  Container,
  makeStyles,
  Button,
  Divider
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StepperList from '../components/StepperList';

const styles = makeStyles(theme => ({
  content_container: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
    height: 'auto',
  },
  content_body: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > div': {
      textAlign: 'center',
      width: '21.5%',
      [theme.breakpoints.down('xs')]: {
        width: '46%',
      }
    }
  },
  border_div: {
    margin: '5px',
    border: '1px solid black',
    padding: '12px'
  },
  text_transform: {
    textTransform: 'capitalize',
    color: '#666666'
  },
}));

const Content = () => {
  const classes = styles();

  const timeFuture = new Date('2021 15:00:00').getTime();
  const now = new Date().getTime();
  const distance = timeFuture - now;
  const initialDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  const initialHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const initialMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const initialSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countDownTimeFuture = distance > 0 && setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours > 0) {
            setHours(hours => hours - 1);
            setMinutes(59);
          } else {
            if (days > 0) {
              setDays(days => days - 1);
              setHours(23);
            } else {
              clearInterval(countDownTimeFuture);
            }
          }
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59)
        }
      }
    }, 1000)

    return () => clearInterval(countDownTimeFuture);
  }, [hours, minutes, seconds]);

  return (
    <Container maxWidth="lg">
      <div id='content' style={{ width: '100%' }}>
        <div id='img-background-padding' style={{ padding: '20px 15px', width: '100%' }}>
          <div id='img-background' style={{ width: '97%' }}>
            <img alt='' style={{ width: '100%' }} src="https://wheyshop.vn/wp-content/uploads/2020/08/VITAMIN-WEB-sua-lai-18092020-1-1024x308.jpg" />
          </div>
        </div>
        <div id='img-small-padding' style={{ padding: '0 15px', width: '100%' }}>
          <div id='img-small' style={{ width: '97%', display: 'flex' }}>
            <div id='img-small-1' style={{ width: '33.33%' }}>
              <img alt='' style={{ width: '100%' }} src="https://cdn.wheyshop.vn/wp-content/uploads/2020/08/on-optimum-nutrition-thuong-hieu-ban-chay-hang-dau-viet-nam.jpg" />
            </div>
            <div id='img-small-2' style={{ width: '33.33%' }}>
              <img alt='' style={{ width: '100%' }} src="https://cdn.wheyshop.vn/wp-content/uploads/2020/08/RULE-1-PROTEIN-thuong-hieu-so-1-the-gioi-gia-re-ha-noi-tphcm.jpg" />
            </div>
            <div id='img-small-3' style={{ width: '33.33%' }}>
              <img alt='' style={{ width: '100%' }} src="https://cdn.wheyshop.vn/wp-content/uploads/2020/08/baner-web-blackmores-ho-tro-suc-khoe-so-1-the-gio.jpg" />
            </div>
          </div>
        </div>
        <div id='content-body-list' style={{ padding: '10px 10px', width: '100%' }} >
          <div className={classes.content_body}>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
            <div className={classes.border_div}>Whey Protein</div>
          </div>
        </div>
        <div id='flash-deals' style={{ padding: '0 15px', width: '100%' }}>
          <h2>FLASH DEALS</h2>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '70%' }}>
              <span style={{ color: '#999' }}>
                Ưu đãi giảm giá tiết kiệm cực lớn cho hàng loạt các sản phẩm bán chạy nhất hiện nay
              </span>
            </div>
            <div style={{ width: '27.5%' }}>
              <div style={{
                backgroundColor: 'green',
                padding: '10px 15px',
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bolder'
              }}>
                <span>Kết thúc lúc: </span>
                <span>
                  {days}ngày, {hours}h:{minutes}m:{seconds}s
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id='flash-deals-img' style={{ width: '100%' }}>
          <div style={{ padding: '20px 0px', display: 'flex' }}>
            <div style={{ width: '29%' }}>
              <div style={{ padding: '0 15px' }}>
                <StepperList />
              </div>
            </div>
            <div style={{ width: '29%' }}>
              <div style={{ padding: '0 15px' }}>
                <StepperList />
              </div>
            </div>
            <div style={{ width: '29%' }}>
              <div style={{ padding: '0 15px' }}>
                <StepperList />
              </div>
            </div>
            <div style={{ width: '29%' }}>
              <div style={{ padding: '0 15px' }}>
                <StepperList />
              </div>
            </div>
          </div>
        </div>

        {/* whey protein */}
        <div id='whey protein' style={{ padding: '0 15px', width: '100%', background: 'red' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>WHEY PROTEIN</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* repair weight gain */}
        <div id='SỮA TĂNG CÂN' style={{ padding: '0 15px', width: '100%', background: 'blue' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>SỮA TĂNG CÂN</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* repair weight gain */}
        <div id='BCAA AMINO ACIDS' style={{ padding: '0 15px', width: '100%', background: 'green' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>BCAA AMINO ACIDS</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* bcaa amino acids */}
        <div id='TĂNG SỨC MẠNH' style={{ padding: '0 15px', width: '100%', background: 'green' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>BCAA AMINO ACIDS</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* repair weight gain */}
        <div id='VITAMIN KHOÁNG CHẤT' style={{ padding: '0 15px', width: '100%', background: 'green' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>BCAA AMINO ACIDS</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* repair weight gain */}
        <div id='HỖ TRỢ GIẢM CÂN' style={{ padding: '0 15px', width: '100%', background: 'green' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>BCAA AMINO ACIDS</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>
        {/* repair weight gain */}
        <div id='PHỤ KIỆN' style={{ padding: '0 15px', width: '100%', background: 'green' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <h2>BCAA AMINO ACIDS</h2>
            </div>
            <div style={{ width: '43%', display: 'flex' }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex' }}>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button className={classes.text_transform}>Whey Protein</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Blend</Button>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                  <Button className={classes.text_transform}>Whey Protein Isolate</Button>
                </div>
              </div>
            </div>
            <div style={{ width: '12%', }}>
              <div style={{ width: '100%', padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button className={classes.text_transform}>Xem Tất Cả</Button>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Divider />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
              <div style={{ width: '33%', display: 'flex' }}>
                <div style={{ width: '100%' }}>
                  <figure style={{ position: 'relative' }}>
                    <a href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      <img alt="" width='120' height='120' src='https://wheyshop.vn/wp-content/uploads/2016/12/Whey-Rule-1-Protein-5lbs-1-280x280.jpg' />
                    </a>
                  </figure>
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <a style={{ textDecoration: 'none', color: '#323232' }} href="https://wheyshop.vn/san-pham/rule-1-proteins-5lbs-2-23kg">
                      Rule 1 Proteins 5lbs (2.23kg)
                    </a>
                  </h3>
                  <div style={{ margin: '5px 0 12px' }}>
                    <div style={{ display: 'flex' }}>
                      <div style={{ width: '50%' }}>
                        <Rating
                          style={{ fontSize: '14px' }}
                          name="simple-controlled"
                        />
                      </div>
                      <div style={{ width: '50%' }}>
                        <span style={{ color: 'grey' }}>123</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <span style={{ color: 'green' }}>12000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <a href="https://wheyshop.vn/flash-sale">
              <img width="100%" src="https://wheyshop.vn/wp-content/uploads/2020/08/baner-web-flash-sale-1.jpg" alt="" />
            </a>
          </div>
        </div>

      </div>
    </Container>
  )
};

export default Content;