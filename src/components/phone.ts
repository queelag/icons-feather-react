import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneElement } from '@aracna/icons-feather-web/elements/phone-element'

export const IconFeatherPhone: ElementComponent<IconFeatherPhoneElement, IconProps> = createBaseElementComponent<
  IconFeatherPhoneElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone', IconFeatherPhoneElement)
