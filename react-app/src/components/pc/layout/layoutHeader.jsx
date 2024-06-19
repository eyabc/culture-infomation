import {Typography} from "@mui/material";

function layoutHeader() {

  return (
      <header id={'layout-header'}>
        <div></div>
        <section>
          <Typography
              id='app-name-header'
              variant="h3"
              component="h3"
          >
            한국 문화 정보
          </Typography>
        </section>
      </header>
  );
}

export default layoutHeader;