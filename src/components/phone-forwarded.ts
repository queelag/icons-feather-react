import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPhoneForwardedElement } from '@aracna/icons-feather-web/elements/phone-forwarded-element'

export const IconFeatherPhoneForwarded: ElementComponent<IconFeatherPhoneForwardedElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneForwardedElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-phone-forwarded', IconFeatherPhoneForwardedElement)
