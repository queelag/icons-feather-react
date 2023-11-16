import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAwardElement } from '@aracna/icons-feather-web/elements/award-element'

export const IconFeatherAward: ElementComponent<IconFeatherAwardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAwardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-award', IconFeatherAwardElement)
