import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFilePlusElement } from '@aracna/icons-feather-web/elements/file-plus-element'

export const IconFeatherFilePlus: ElementComponent<IconFeatherFilePlusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFilePlusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-file-plus', IconFeatherFilePlusElement)
