import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShareElement } from '@aracna/icons-feather-web/elements/share-element'

export const IconFeatherShare: ElementComponent<IconFeatherShareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-share', IconFeatherShareElement)
