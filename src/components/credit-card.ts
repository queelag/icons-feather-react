import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCreditCardElement } from '@aracna/icons-feather-web/elements/credit-card-element.js'

export const IconFeatherCreditCard: ElementComponent<IconFeatherCreditCardElement, IconProps> = createBaseElementComponent<
  IconFeatherCreditCardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-credit-card', IconFeatherCreditCardElement)
