import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherArchiveElement } from '@aracna/icons-feather-web/elements/archive-element'

export const IconFeatherArchive: ElementComponent<IconFeatherArchiveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArchiveElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-archive', IconFeatherArchiveElement)
