import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBoldElement } from '@aracna/icons-feather-web/elements/bold-element'

export const IconFeatherBold: ElementComponent<IconFeatherBoldElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBoldElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-bold', IconFeatherBoldElement)
