import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneOffElement } from '@aracna/icons-feather-web/elements/phone-off-element'

export const IconFeatherPhoneOff: ElementComponent<IconFeatherPhoneOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-off', IconFeatherPhoneOffElement)
