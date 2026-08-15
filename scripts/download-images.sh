#!/usr/bin/env bash
# Downloads all Apple.com clone assets locally so the site works fully offline.
# Usage: bash scripts/download-images.sh
set -uo pipefail

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/images"
APL="https://www.apple.com"

FAILS=0
OK=0

download() {
  # download <url> <local-file>
  local url="$1" out="$2"
  if curl -fsSL --retry 2 --connect-timeout 20 -A "$UA" "$url" -o "$out"; then
    OK=$((OK+1))
    echo "  OK  $(basename "$out")"
  else
    FAILS=$((FAILS+1))
    echo "  FAIL  $url" >&2
  fi
}

# ---------------------------------------------------------------------------
# HOMEPAGE  (heroes, promo tiles, logos)
# ---------------------------------------------------------------------------
echo "[home]"
download "$APL/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_large.jpg"    "$IMG/home/hero-iphone-family.jpg"
download "$APL/v/home/images/back-to-school-2026/a/hero_back_to_school_2026__cz07tzsg14sy_large.jpg" "$IMG/home/hero-back-to-school.jpg"
download "$APL/v/home/images/macbook-air-m5/a/hero_macbook_air_m5__eb1idggd120y_large.jpg"  "$IMG/home/hero-macbook-air.jpg"
download "$APL/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_large.jpg"       "$IMG/home/promo-ipad-air.jpg"
download "$APL/v/home/images/apple-at-work/a/promo_apple_at_work__bfo26h36ci4i_large.jpg"   "$IMG/home/promo-apple-at-work.jpg"
download "$APL/v/home/images/macbook-pro/a/promo_macbook_pro__c9td9w1mc8ia_large.jpg"       "$IMG/home/promo-macbook-pro.jpg"
download "$APL/v/home/images/apple-watch-series-11/a/promo_apple_watch_series_11__gnlwqxe1jlu2_large.jpg" "$IMG/home/promo-apple-watch-series-11.jpg"
download "$APL/v/home/images/iphone-tradein/a/promo_iphone_tradein__e4hrjxmgmf0i_large.jpg"  "$IMG/home/promo-iphone-tradein.jpg"
download "$APL/v/home/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_large.jpg"         "$IMG/home/promo-apple-card.jpg"
download "$APL/v/home/images/logos/ipad-air-m4/a/promo_logo_ipad_air__dqdj4ni03quu_large.png" "$IMG/home/logo-ipad-air.png"
download "$APL/v/home/images/logos/apple-watch-series-11/a/promo_logo_apple_watch_series_11__5r9c4l119tuy_large.png" "$IMG/home/logo-apple-watch-series-11.png"
download "$APL/v/home/images/logos/iphone-tradein/a/promo_logo_iphone_tradein__bb7assu7ubo2_large.png" "$IMG/home/logo-iphone-tradein.png"
download "$APL/v/home/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia_large.png" "$IMG/home/logo-apple-card.png"
download "$APL/v/home/cj/images/tv-gallery/logo_hero_light__d7t8cya4x26a_small.png"          "$IMG/home/logo-atvplus.png"

# ---------------------------------------------------------------------------
# ENTERTAINMENT GALLERY  (TV+ backgrounds, TV show logos, family backgrounds)
# ---------------------------------------------------------------------------
echo "[gallery]"
MZ="https://is1-ssl.mzstatic.com/image/thumb"
download "$MZ/eD8DZGJ170t3MyFhlWOkdw/1250x668sr.jpg"        "$IMG/gallery/tv-ted-lasso.jpg"
download "$MZ/3aJOoInTKLjwSg8kv-ifDg/1250x668sr.jpg"        "$IMG/gallery/tv-lucky.jpg"
download "$MZ/Features/v4/11/cd/47/11cd47ca-af61-71a8-6b02-4a0af9d55077/a54b4338-9340-422f-b5c6-1420bf850b01.png/1250x668sr.jpg" "$IMG/gallery/tv-f1.jpg"
download "$MZ/hRaOrIKahRFcNlKt6UV4Ow/1250x668sr.jpg"        "$IMG/gallery/tv-silo.jpg"
download "$MZ/Features/v4/f9/64/c4/f964c4d8-9353-ec55-fb70-8944917e1b97/08bf478a-2dc1-44e2-914d-ec180c22fa25.png/1250x668sr.jpg" "$IMG/gallery/tv-mls.jpg"
download "$MZ/koGPFMce0cxPTuuHdx325g/1250x668sr.jpg"        "$IMG/gallery/tv-dink.jpg"
download "$MZ/Features/v4/33/9e/cf/339ecfe7-f515-8594-2e48-d991803409ea/5a944fdc-acd7-47a8-89e7-274d84cf4276.png/1250x668sr.jpg" "$IMG/gallery/tv-fnb.jpg"
download "$MZ/qkaEsaFl5id_Gx38S0IVLw/1250x668sr.jpg"        "$IMG/gallery/tv-cape-fear.jpg"
download "$MZ/CqMFl0CvUAUE1axxV4k-ew/1250x668sr.jpg"        "$IMG/gallery/tv-widows-bay.jpg"

download "$MZ/Cc6MMzxFzD1gVqnd6IslKA/220x54.png"            "$IMG/gallery/logo-ted-lasso.png"
download "$MZ/pQdOLq_2af0BOpHwvbC6vg/220x54.png"            "$IMG/gallery/logo-lucky.png"
download "$MZ/Features221/v4/f0/ac/1e/f0ac1e58-0027-49d0-378e-68470edfb0ec/3b7d6fac-0061-401c-9716-742245053fd0.png/220x54.png" "$IMG/gallery/logo-f1.png"
download "$MZ/w6iOdqXGZLugnUgKmWZp0g/220x54.png"            "$IMG/gallery/logo-silo.png"
download "$MZ/Kc1Xx3Z1QBOuXe1EHDu4TA/220x54.png"            "$IMG/gallery/logo-mls.png"
download "$MZ/hjNrUSK0q2WdGZr46dOQyw/220x54.png"            "$IMG/gallery/logo-dink.png"
download "$MZ/Features211/v4/6f/41/7c/6f417c01-dbf7-6cdc-df62-f014aa88a673/e452926f-7b52-4c05-a07f-8e4939b1bf6b.png/220x54.png" "$IMG/gallery/logo-fnb.png"
download "$MZ/w-hRWVBPfcq3HixQ-3yZiw/220x54.png"            "$IMG/gallery/logo-cape-fear.png"
download "$MZ/vXNv4MQ8aLXIkWQTZxw-BQ/220x54.png"            "$IMG/gallery/logo-widows-bay.png"

download "$MZ/Features211/v4/55/2b/5f/552b5f86-46e6-d848-ee06-5395bf09c206/83e0ed3d-c824-4ed9-9572-ae9e784568cb.png/470x264.jpg" "$IMG/gallery/fam-sabrina.jpg"
download "$MZ/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/470x264.jpg" "$IMG/gallery/fam-hello-kitty.jpg"
download "$MZ/Features221/v4/c1/e6/09/c1e609c8-914d-6037-cda2-4cfdaf87a263/07eaa70a-574b-4abe-aea4-bcb530d837e3.png/470x264.jpg" "$IMG/gallery/fam-david-bowie.jpg"
download "$MZ/Features/v4/d2/c0/34/d2c034a9-4c6f-c97f-2cc8-85b056699f62/a6b27345-5c84-471f-99aa-c84fc695814e.png/470x264.jpg" "$IMG/gallery/fam-a-list-pop.jpg"
download "$MZ/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/470x264.jpg" "$IMG/gallery/fam-powerwash.jpg"
download "$MZ/Video221/v4/24/25/85/2425854a-14c7-fb09-533b-110aaf585363/HI_BW_0217_artwork_en_ID336111_0.png/470x264.jpg" "$IMG/gallery/fam-hiit.jpg"
download "$MZ/Features/v4/da/39/f5/da39f55d-14f1-68df-21a7-c1fdd4de5303/f1a2cd59-4a5e-43c2-bb87-d3f4e1210317.png/470x264.jpg" "$IMG/gallery/fam-new-music.jpg"
download "$MZ/Features221/v4/89/07/9c/89079c5b-29da-cd1f-4ce3-ad68f3d28a68/f0346506-4c9f-4be1-b275-11fa4004b103.png/470x264.jpg" "$IMG/gallery/fam-balatro.jpg"
download "$MZ/Features211/v4/2a/75/df/2a75df27-703b-4712-6d95-9c9e29ca1dc6/fa77ffdb-61aa-47e7-920a-7da1876f3929.png/470x264.jpg" "$IMG/gallery/fam-programs.jpg"

# ---------------------------------------------------------------------------
# IPHONE PAGE
# ---------------------------------------------------------------------------
echo "[iphone]"
IPH="$APL/v/iphone/home/cj/images/overview"
download "$IPH/chapternav/nav_iphone_17pro__b8rt659h2ogi_large.png" "$IMG/iphone/nav-iphone-17pro.png"
download "$IPH/chapternav/nav_iphone_air__f066mfdfhi62_large.png"   "$IMG/iphone/nav-iphone-air.png"
download "$IPH/chapternav/nav_iphone_17__bx67weh1ur5y_large.png"    "$IMG/iphone/nav-iphone-17.png"
download "$IPH/chapternav/nav_iphone_17e__dea363vi6ggi_large.png"   "$IMG/iphone/nav-iphone-17e.png"
download "$IPH/chapternav/nav_iphone_16__qsxcpuia0oam_large.png"    "$IMG/iphone/nav-iphone-16.png"
download "$IPH/chapternav/nav_compare__e3xurpy671me_large.png"      "$IMG/iphone/nav-compare.png"
download "$IPH/chapternav/nav_accessories__d0p6sy36eueu_large.png"  "$IMG/iphone/nav-accessories.png"
download "$IPH/chapternav/nav_shop__en8a967ft5km_large.png"         "$IMG/iphone/nav-shop.png"
download "$IPH/chapternav/nav_os__ctztjfl7myye_large.png"           "$IMG/iphone/nav-os.png"

download "$IPH/select/iphone_17pro__t1j902iw6kya_large.jpg"  "$IMG/iphone/select-17pro.jpg"
download "$IPH/select/iphone_17__fb1277oq3eaa_large.jpg"     "$IMG/iphone/select-17.jpg"
download "$IPH/select/iphone_17e__cq5ygzct314y_large.jpg"    "$IMG/iphone/select-17e.jpg"
download "$IPH/select/iphone_air__b5qmgl05ojyq_large.jpg"    "$IMG/iphone/select-air.jpg"
download "$IPH/select/iphone_16__b6tkv86m2gc2_large.jpg"     "$IMG/iphone/select-16.jpg"

download "$IPH/consider/getting_started__c6vq76n4ufu6_large.jpg" "$IMG/iphone/consider-getting-started.jpg"
download "$IPH/consider/designed-to_last__f60bwgep88ya_large.jpg" "$IMG/iphone/consider-designed-to-last.jpg"
download "$IPH/consider/ios__8z58j1o80yqi_large.jpg"          "$IMG/iphone/consider-ios.jpg"
download "$IPH/consider/privacy__cv4ztv5gebyq_large.jpg"      "$IMG/iphone/consider-privacy.jpg"
download "$IPH/consider/camera__dez4cvpw83sm_large.jpg"       "$IMG/iphone/consider-camera.jpg"
download "$IPH/consider/chip__fh5j5on49p2e_large.jpg"         "$IMG/iphone/consider-chip.jpg"
download "$IPH/consider/innovation__fmir5mp9zpay_large.jpg"   "$IMG/iphone/consider-innovation.jpg"
download "$IPH/consider/environment__c8tpot4ti2qa_large.jpg"  "$IMG/iphone/consider-environment.jpg"
download "$IPH/consider/safety__grtwyqpan8yi_large.jpg"       "$IMG/iphone/consider-safety.jpg"

download "$IPH/essentials/accessories__ghgqo4vsxcqe_large.jpg"    "$IMG/iphone/essentials-accessories.jpg"
download "$IPH/essentials/airtag_accessories__kpd2m3mfy4ia_large.jpg" "$IMG/iphone/essentials-airtag.jpg"
download "$IPH/upgrade/upgrade__gnkw9odm0wa6_large.jpg"            "$IMG/iphone/upgrade.jpg"
download "$IPH/guided-tour/guided_tour__e70yvshmbb2i_large.jpg"    "$IMG/iphone/guided-tour.jpg"
download "$IPH/incentive/trade_in__d4dobu5egm0y_large.jpg"         "$IMG/iphone/incentive-trade-in.jpg"
download "$IPH/incentive/buy__gdo4oaj4ekmm_large.jpg"              "$IMG/iphone/incentive-buy.jpg"
download "$IPH/incentive/deliver__by32yxmh41ma_large.jpg"          "$IMG/iphone/incentive-deliver.jpg"
download "$IPH/incentive/setup__d177om0fsqs2_large.jpg"            "$IMG/iphone/incentive-setup.jpg"
download "$IPH/incentive/specialist__bxk6m5pp2k3m_large.jpg"       "$IMG/iphone/incentive-specialist.jpg"
download "$IPH/augment/airpods__bz9s5pwm8j6u_large.jpg"            "$IMG/iphone/augment-airpods.jpg"
download "$IPH/augment/mac__e1itm725bz8m_large.jpg"                "$IMG/iphone/augment-mac.jpg"
download "$IPH/augment/watch__co62o3s4jn6u_large.jpg"              "$IMG/iphone/augment-watch.jpg"

# ---------------------------------------------------------------------------
# MAC PAGE
# ---------------------------------------------------------------------------
echo "[mac]"
AMAC="$APL/assets-www/en_WW/mac"
download "$AMAC/04_product_tile/large/mba_13_15_e733a3435.jpg"  "$IMG/mac/tile-macbook-air.jpg"
download "$AMAC/04_product_tile/large/mbn_37b3fdaaf.jpg"        "$IMG/mac/tile-macbook.jpg"
download "$AMAC/04_product_tile/large/mbp_14_16_fa5e3a2b2.jpg"  "$IMG/mac/tile-macbook-pro.jpg"
download "$AMAC/04_product_tile/large/imac_24_7732743f3.jpg"    "$IMG/mac/tile-imac.jpg"
download "$AMAC/04_product_tile/large/mac_mini_d300dfe42.jpg"   "$IMG/mac/tile-mac-mini.jpg"
download "$AMAC/04_product_tile/large/mac_studio_e9f221da0.jpg" "$IMG/mac/tile-mac-studio.jpg"
download "$AMAC/01_feature_card/large/fc_intelligence_d43fd46ab.jpg" "$IMG/mac/fc-intelligence.jpg"
download "$AMAC/01_feature_card_boc/large/macos_74d0acce5.jpg"       "$IMG/mac/fc-macos.jpg"
download "$AMAC/01_feature_card_boc/large/performance_charge_4f7a82bc1.jpg" "$IMG/mac/fc-performance.jpg"
download "$AMAC/01_feature_card_boc/large/intelligence_apps_564a406f0.jpg" "$IMG/mac/fc-intelligence-apps.jpg"
download "$AMAC/01_feature_card_boc/large/mac_iphone_call_text_0cef5b819.jpg" "$IMG/mac/fc-continuity.jpg"
download "$AMAC/03_feature_card/large/fc_durability_7221cba90.jpg" "$IMG/mac/fc-durability.jpg"
download "$AMAC/03_banner_card_2up/large/mac_does_that_6722182e4.png" "$IMG/mac/banner-mac-does-that.png"
download "$AMAC/03_banner_card_2up/large/trade_in_bab70f9c6.png" "$IMG/mac/banner-trade-in.png"

# ---------------------------------------------------------------------------
# IPAD PAGE
# ---------------------------------------------------------------------------
echo "[ipad]"
AIP="$APL/assets-www/en_WW/ipad"
download "$AIP/03_product_tile/large/ipad_pro_b15908d8a.png"  "$IMG/ipad/tile-pro.png"
download "$AIP/03_product_tile/large/ipad_air_000dd2f9c.png"  "$IMG/ipad/tile-air.png"
download "$AIP/03_product_tile/large/ipad_07e11a653.png"      "$IMG/ipad/tile-ipad.png"
download "$AIP/03_product_tile/large/ipad_mini_cde3db6eb.png" "$IMG/ipad/tile-mini.png"
download "$AIP/01_feature_card/large/fc_ipados_e45197f15.jpg" "$IMG/ipad/fc-ipados.jpg"
download "$AIP/01_feature_card_boc/large/apple_intelligence_siri_b10e39793.jpg" "$IMG/ipad/fc-siri.jpg"
download "$AIP/01_feature_card_boc/large/apple_intelligence_words_97c3f17c1.jpg" "$IMG/ipad/fc-writing.jpg"
download "$AIP/01_feature_card_boc/large/creativity_best_shot_d91d2169a.jpg" "$IMG/ipad/fc-creativity.jpg"
download "$AIP/01_feature_card_boc/large/productivity_work_anywhere_7abb9f019.jpg" "$IMG/ipad/fc-productivity.jpg"
download "$AIP/01_image_accordion/large/ipad_iphone_fe7dacf06.jpg" "$IMG/ipad/acc-iphone.jpg"
download "$AIP/01_image_accordion/large/ipad_watch_0802b0a9c.jpg" "$IMG/ipad/acc-watch.jpg"
download "$AIP/03_banner_card_2up/large/keyboard_92dba62f4.png" "$IMG/ipad/banner-keyboard.png"
download "$AIP/03_banner_card_2up/large/pencil_c98eff27a.png"  "$IMG/ipad/banner-pencil.png"

# ---------------------------------------------------------------------------
# APPLE WATCH PAGE
# ---------------------------------------------------------------------------
echo "[watch]"
AWT="$APL/assets-www/en_WW/watch"
download "$AWT/product_tile/large/s11_5b6ada38f.png"  "$IMG/watch/tile-s11.png"
download "$AWT/product_tile/large/se_df3e5c87b.png"   "$IMG/watch/tile-se.png"
download "$AWT/product_tile/large/u3_b14b28758.png"   "$IMG/watch/tile-u3.png"
download "$AWT/01_banner_card_1up/large/essentials_b10312d5b.jpg" "$IMG/watch/hero-essentials.jpg"
download "$AWT/feature_card/large/health_e075eade3.jpg"   "$IMG/watch/fc-health.jpg"
download "$AWT/feature_card/large/fitness_1ca4bcd90.jpg"  "$IMG/watch/fc-fitness.jpg"
download "$AWT/feature_card/large/safety_be3fcdf09.jpg"   "$IMG/watch/fc-safety.jpg"
download "$AWT/feature_card/large/personalization_715ba41be.jpg" "$IMG/watch/fc-personalization.jpg"
download "$AWT/feature_card/large/connectivity_06603a2d5.jpg"   "$IMG/watch/fc-connectivity.jpg"
download "$AWT/feature_card/large/adventure_7da4554f9.jpg"      "$IMG/watch/fc-adventure.jpg"
download "$AWT/feature_card/large/watch_and_iphone_6faedc87f.jpg" "$IMG/watch/fc-iphone.jpg"
download "$AWT/02_value_props/large/education_b123bbac3.jpg"   "$IMG/watch/vp-education.jpg"
download "$AWT/incentive_card/large/trade_in_aac5b8f02.jpg"    "$IMG/watch/vp-trade-in.jpg"

echo
echo "Downloaded: $OK images, $FAILS failures."
exit 0
