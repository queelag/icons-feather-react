import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCreditCardElement } from '@aracna/icons-feather-web/elements/credit-card-element'

export const IconFeatherCreditCard: ElementComponent<IconFeatherCreditCardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCreditCardElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-credit-card', IconFeatherCreditCardElement)
