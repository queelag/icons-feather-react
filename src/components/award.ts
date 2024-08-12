import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAwardElement } from '@aracna/icons-feather-web/elements/award-element'

export const IconFeatherAward: ElementComponent<IconFeatherAwardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAwardElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-award', IconFeatherAwardElement)
