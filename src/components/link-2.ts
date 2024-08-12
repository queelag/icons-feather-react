import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLink2Element } from '@aracna/icons-feather-web/elements/link-2-element'

export const IconFeatherLink2: ElementComponent<IconFeatherLink2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLink2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-link-2', IconFeatherLink2Element)
