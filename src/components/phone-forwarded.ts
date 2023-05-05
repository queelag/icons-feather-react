import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneForwardedElement } from '@aracna/icons-feather-web/elements/phone-forwarded-element.js'

export const IconFeatherPhoneForwarded: ElementComponent<IconFeatherPhoneForwardedElement, IconProps> = createBaseElementComponent<
  IconFeatherPhoneForwardedElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-forwarded', IconFeatherPhoneForwardedElement)
