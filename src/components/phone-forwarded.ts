import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPhoneForwardedElement } from '@aracna/icons-feather-web/elements/phone-forwarded-element'

export const IconFeatherPhoneForwarded: ElementComponent<IconFeatherPhoneForwardedElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPhoneForwardedElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-phone-forwarded', IconFeatherPhoneForwardedElement)
