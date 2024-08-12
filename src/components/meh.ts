import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMehElement } from '@aracna/icons-feather-web/elements/meh-element'

export const IconFeatherMeh: ElementComponent<IconFeatherMehElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMehElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-meh', IconFeatherMehElement)
