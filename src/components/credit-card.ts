import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCreditCardElement } from '@aracna/icons-feather-web/elements/credit-card-element'

export const IconFeatherCreditCard: ElementComponent<IconFeatherCreditCardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCreditCardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-credit-card', IconFeatherCreditCardElement)
