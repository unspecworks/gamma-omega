#include QMK_KEYBOARD_H
#include "keymap.h"

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = { \
    [0] = KEYMAP(  \
		KC_Q, KC_W, KC_E, KC_R, KC_T,    KC_P, KC_O, KC_I, KC_U, KC_Y, \
		KC_A, KC_S, KC_D, KC_F, KC_G,    KC_SCLN, KC_L, KC_K, KC_J, KC_H, \
		KC_Z, KC_X, KC_C, KC_V, KC_B,    KC_SLSH, KC_DOT, KC_COMM, KC_M, KC_N, \
              KC_ESC, KC_SPC, KC_TAB,    KC_LCTL, KC_ENT, KC_LALT \
    ) \
};
