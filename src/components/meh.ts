import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMehElement } from '@aracna/icons-feather-web/elements/meh-element'

export const IconFeatherMeh: ElementComponent<IconFeatherMehElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMehElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-meh', IconFeatherMehElement)
